class Sight:
    def __init__(self, name, city):
        self.name = name
        self.city = city

    def __str__(self):
        return f'Туристичне місце: {self.name}, ({self.city})'

class List:
    def __init__(self, sights=[]):
        self.sights = sights

    def __iter__(self):
        return ListIterator(self)

class ListIterator:
    def __init__(self, list):
        self._places = list.sights
        self._list_size = len(self._places)
        self._current_index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self._current_index < self._list_size:
            element = self._places[self._current_index]
            self._current_index += 1
            return element
        raise StopIteration


if __name__ == '__main__':
    s1 = Sight('Дендропарк Софіїівка', 'Умань')
    s2 = Sight('Шацькі озера', 'Шацьк')
    s3 = Sight('гора Говерла', 'Карпати')
    s4 = Sight('Площа Ринок', 'Львів')

    selfDecision = [s1, s2, s3, s4]
    navigator = [s2, s3, s4, s1]
    guide = [s4, s3, s2, s1]

    print("\nНа власний розсуд туриста:")
    list = List(selfDecision)
    for element in list:
        print(element)

    print("\nЗа рекомендаціями навігатора:")
    list = List(navigator)
    for element in list:
        print(element)

    print("\nЗа рекомендаціями гіда:")
    list = List(guide)
    for element in list:
        print(element)