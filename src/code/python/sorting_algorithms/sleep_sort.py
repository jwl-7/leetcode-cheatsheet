from threading import Thread
from time import sleep


def sleep_sort(nums: list ) -> list:
    sorted_nums = []
    threads = []

    for num in nums:
        thread = Thread(target=snorlax, args=(num, sorted_nums))
        threads.append(thread)

    for thread in threads:
        thread.start( )

    for thread in threads:
        thread.join()

    return sorted_nums

def snorlax(num: float, nums: list) -> None:
    sleep(num / 1000.0)
    nums.append(num)
