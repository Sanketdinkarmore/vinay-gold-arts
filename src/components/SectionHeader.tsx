import { Reveal } from "@/components/Reveal";

type SectionHeaderProps = {
    eyebrow?: string
    title: string
    subtitle?: string
    className?: string
}

export function SectionHeader({ eyebrow, title, subtitle, className }: SectionHeaderProps) {
    return (
        <Reveal className={`text-center ${className ?? ""}`}>
            {eyebrow ? (
                <div className="inline-flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs sm:text-sm font-medium tracking-wider text-primary uppercase">
                        {eyebrow}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-primary" />
                </div>
            ) : null}

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                {title}
            </h2>

            {subtitle ? (
                <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                </p>
            ) : null}

            <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </Reveal>
    )
}
