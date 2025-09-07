// Share utility functions
export interface ShareData {
  title: string;
  text: string;
  url: string;
}

export const shareProduct = async (product: { name: string; category: string; price: number; slug: string }): Promise<boolean> => {
  const shareData: ShareData = {
    title: product.name,
    text: `Check out this beautiful ${product.category.toLowerCase()}: ${product.name} - ₹${product.price.toLocaleString()}`,
    url: `${window.location.origin}/product/${product.slug}`
  };

  // Check if Web Share API is supported
  if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
      return true;
    } catch (error) {
      console.log('Web Share API cancelled or failed:', error);
      // Fall back to clipboard
      return fallbackShare(shareData);
    }
  } else {
    // Fall back to clipboard
    return fallbackShare(shareData);
  }
};

const fallbackShare = async (shareData: ShareData): Promise<boolean> => {
  try {
    // Try to copy to clipboard
    await navigator.clipboard.writeText(`${shareData.text}\n\n${shareData.url}`);
    
    // Show a toast notification (you can replace this with your toast system)
    showToast('Product link copied to clipboard!', 'success');
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    
    // Final fallback - show the share data in a prompt
    const shareText = `${shareData.text}\n\n${shareData.url}`;
    const userConfirmed = confirm(`Share this product:\n\n${shareText}\n\nClick OK to copy the link.`);
    
    if (userConfirmed) {
      try {
        // Try to select the text in a temporary textarea
        const textarea = document.createElement('textarea');
        textarea.value = shareText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Product link copied!', 'success');
        return true;
      } catch (fallbackError) {
        console.error('All share methods failed:', fallbackError);
        showToast('Unable to share. Please copy the URL manually.', 'error');
        return false;
      }
    }
    return false;
  }
};

// Simple toast notification function
const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  // Create a simple toast notification
  const toast = document.createElement('div');
  toast.className = `fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 ${
    type === 'success' ? 'bg-green-500' : 'bg-red-500'
  }`;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
    toast.style.opacity = '1';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.transform = 'translateX(100%)';
    toast.style.opacity = '0';
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
};

// Share to specific platforms
export const shareToWhatsApp = (product: { name: string; category: string; price: number; slug: string }) => {
  const message = `Check out this beautiful ${product.category.toLowerCase()}:\n\n${product.name}\nPrice: ₹${product.price.toLocaleString()}\n\nView details: ${window.location.origin}/product/${product.slug}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export const shareToFacebook = (product: { slug: string }) => {
  const url = `${window.location.origin}/product/${product.slug}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookUrl, '_blank');
};

export const shareToTwitter = (product: { name: string; category: string; price: number; slug: string }) => {
  const text = `Check out this beautiful ${product.category.toLowerCase()}: ${product.name} - ₹${product.price.toLocaleString()}`;
  const url = `${window.location.origin}/product/${product.slug}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(twitterUrl, '_blank');
};

export const shareToInstagram = (product: { name: string; category: string; price: number; slug: string }) => {
  // Instagram doesn't support direct URL sharing, so we'll copy the link
  const text = `Check out this beautiful ${product.category.toLowerCase()}: ${product.name} - ₹${product.price.toLocaleString()}\n\n${window.location.origin}/product/${product.slug}`;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Product details copied! You can now paste it in your Instagram story or post.', 'success');
  }).catch(() => {
    showToast('Please copy the product URL manually for Instagram sharing.', 'error');
  });
};
