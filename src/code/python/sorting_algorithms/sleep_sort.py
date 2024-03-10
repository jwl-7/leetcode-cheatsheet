from threading import Thread
from time import sleep


def sleep_sort(arr: list ) -> list:
    sorted_arr = []
    threads = []

    for num in arr:
        thread = Thread(target=snorlax, args=(num, sorted_arr))
        threads.append(thread)

    for thread in threads:
        thread.start( )

    for thread in threads:
        thread.join()

    return sorted_arr

def snorlax(num: float, arr: list) -> None:
    sleep(num / 1000.0)
    arr.append(num)
