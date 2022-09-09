import sortBabyNamesAlphabet from "./sortBabyNamesAlphabet";

const mockData = [
  {
    id: 0,
    name: "Zahra",
    sex: "f",
  },
  {
    id: 1,
    name: "Parsa",
    sex: "m",
  },
];

test("sortBabyNamesAlphabet sorts baby names in alphabetical order, insentive to case and returns the sorted array", () => {
  expect(sortBabyNamesAlphabet(mockData)).toStrictEqual([
    {
      id: 1,
      name: "Parsa",
      sex: "m",
    },
    {
      id: 0,
      name: "Zahra",
      sex: "f",
    },
  ]);
});
