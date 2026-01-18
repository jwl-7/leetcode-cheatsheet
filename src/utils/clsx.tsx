type ClassValue = string | number | boolean | undefined | null | { [key: string]: any } | ClassValue[]

export default function clsx(...inputs: ClassValue[]): string {
    let str = ''
    for (const input of inputs) {
        if (!input) continue
        if (typeof input === 'string' || typeof input === 'number') {
            str += (str && ' ') + input
        } else if (Array.isArray(input)) {
            const inner = clsx(...input)
            if (inner) str += (str && ' ') + inner
        } else if (typeof input === 'object') {
            for (const key in input) {
                if (input[key]) {
                    str += (str && ' ') + key
                }
            }
        }
    }

    return str
}
