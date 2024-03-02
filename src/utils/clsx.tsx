export default function clsx(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ')
}
