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