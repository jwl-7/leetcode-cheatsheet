class HashMap:
    def __init__(self) -> None:
        self.bucket = [None] * 100000

    def put(self, key: int, value: int) -> None:
        hash_key = hash(key) % 100000
        self.bucket[hash_key] = value

    def get(self, key: int) -> int:
        hash_key = hash(key) % 100000
        value = self.bucket[hash_key]
        return value if value is not None else -1

    def remove(self, key: int) -> None:
        hash_key = hash(key) % 100000
        self.bucket[hash_key] = None
