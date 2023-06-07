import React from 'react'

const App = () => {
  const data = ['a', 'a', 'b']
  // console.log(data.filter((item, index) => data.indexOf(item) === index))
  // console.log([...new Set(data)]);

  const data2 = [{ id: 1, name: 'Prem Biswas', }, { id: 2, name: 'Govinda Biswas' }, { id: 3, name: 'Prem Biswas' }, { id: 4, name: 'Kapil Biswas' }, { id: 5, name: 'Rajiv Biswas' }]
  data2.push({ id: 6, name: 'kamal Biswas', })
  const NewList = Array.from(new Set(data2?.map(a => a?.name)))?.map(name => {
    return data2?.find(a => a?.name === name)
  });
  // console.log(NewList)
  // console.log([...new Map(data2.map((m) => [m.name, m])).values()]);
  // console.log(data2.sort((a, b) => a.name > b.name ? 1 : -1))
  // console.log(data2.sort((a, b) => b.id - a.id))
  // console.log(data2.filter((value, index) => value?.name === 'Kapil Biswas'))
  // console.log(data2.find((value, index) => value?.name === 'Kapil Biswas'))
  // console.log(data2.filter((value, index) => value?.id >= 4))

  const data3 = [{ id: 1, score: 10 }, { id: 2, score: 10 }, { id: 3, score: 10 }, { id: 4, score: 10 },];
  // console.log(data3.map(function (item) { return item?.score - 2 }))
  // console.log(data3.reduce((prev, curr) => prev + curr.score, 0))

  const num = [1, 2, 3, 4, 5, 6];
  // console.log(num.reduce((prev, curr) => prev + curr, 0))
  // console.log(Math.max(...num));
  // console.log(Math.max(...num?.map(o => o), 0))
  // console.log(num?.reduce((a, b) => (a > b) ? a : b))

  const test = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 },];
  // console.log(Math.max(...test.map(o => o.num)))
  // console.log(Math.max(...test?.map(o => o.num), 0))
  // console.log(test?.reduce((a, b) => (a.num > b?.num) ? a : b))

  var sum = 1;
  for (var i = 0; i < data3.length; i++) {
    sum = sum * data3[i].score
  };

  // hoistingdata = 10
  console.log(hoistingdata)
  var hoistingdata = 20;

  // console.log('round', Math.round(4.6))
    // console.log('ceil', Math.ceil(4.6))
    // console.log('floor', Math.floor(4.6))
    // console.log('trunc', Math.trunc(4.9))
    // console.log('sign', Math.sign(0))
    // console.log('pow', Math.pow(2, 4))
    // console.log('sqrt', Math.sqrt(16))
    // console.log('abs', Math.abs(7.9))
    // console.log('sin', Math.sin(45 * Math.PI / 180))
    // console.log('cos', Math.cos(90 * Math.PI / 180))
    // console.log('min', Math.min(0, 150, 30, 20, -8, -200))
    // console.log('max', Math.max(...[0, 150, 30, 20, -8, -200]))
    // console.log(Math.max(...[0, 150, 30, 20, -8, -200, 546]?.map(o => o), 0))
    // console.log('random', Math.floor(100000 + Math.random() * 900000))

  
  /* const data = [10, "A", 20, "B", 30, "C", 40, "D"]
        let letterArray = [];
        let numberArray = [];

        for (let num = 0; num < data.length; num++) {
            // console.log(typeof data[num] === 'string')
            if (typeof data[num] === 'string') {
                letterArray.push(data[num])
            } else if (Number(data[num])) {
                numberArray.push(data[num]);
            }
        }
        console.log(letterArray)
        console.log(numberArray) */
        const data = [{ value: 10, }, { value: "A" }, { value: 20 }, { value: "B" }, , { value: 30, }, { value: "C" }, { value: 40, }, { value: "D" }]
        let letterArray = [];
        let numberArray = [];

        for (let num = 0; num < data?.length; num++) {
            if (typeof data[num]?.value === 'string') {
                letterArray.push(data[num]?.value)
            } else if (Number(data[num]?.value)) {
                numberArray.push(data[num]?.value);
            }
        }
        // console.log(letterArray)
        // console.log(numberArray)

        /* function generatePpyramind() {
            var totalNumberofRow = 5;
            var output = '*'
            for (var i = 1; i <= totalNumberofRow; i++) {
                for (var j = 1; j <= i; j++) {
                    output += j + ' ';
                }
                console.log(output);
                output = '*'
            }
        }
        generatePpyramind(); */


        const ArrData = [
            [[{ value: 1 }, [{ value: 2 }]], { value: 3 }, { value: 4 }],
            [{ value: 5 }, { value: 6 }, [{ value: 7 }, { value: 8 }]],
            [{ value: 9 }, { value: 10 }, [{ value: 11 }, { value: 12 }]],
            [{ value: 13 }, { value: 14 }, [{ value: 15 }, { value: 16 }]],
        ]
        function flatten(arr) {
            return arr.reduce(function (flat, toFlatten) {
                return flat.concat(
                    Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
                );
            }, []);
        }

        // flatten(ArrData)?.map((value) => { console.log(value?.value) })

        var arrays = [
            ["$6"],
            ["$12"],
            ["$25"],
            ["$25"],
            ["$18"],
            ["$22"],
            ["$10"]
        ];
        var merged = [].concat.apply([], arrays);
        // console.log(merged);

        function foo() {
            let b = 1;
            function inner() {
                return b;
            }
            return inner;
        }
        let get_func_inner = foo();
        // console.log(get_func_inner());

        function init() {
            var name = "Mozilla";
            const displayName = () => {
                return name
            }
            return displayName;
        }
        const oneFunc = init();
        // console.log(oneFunc())

        // program to count down numbers to 1
        function countDown(number) {
            // console.log(number);
            const newNumber = number - 1;
            if (newNumber > 0) {
                countDown(newNumber);
            }
            return newNumber
        }

        // console.log(countDown(4))

        const arryar = [1, 2, 3, 4, 5, 6, 7, 8]
        // console.log(arryar?.splice(0, 2))

        const MapM = arryar.map((value) => value)
        // console.log(MapM)
        const array1 = ['a', 'b', 'c'];
        // arryar.forEach((element) => console.log(element));

        const string = 'biswas'
        console.log([...new Set(string)].join(''))

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {data2.map((element, index, array) => (
        <div key={index}>
          <h3>{element?.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default App
