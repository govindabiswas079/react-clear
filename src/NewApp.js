import React, { Fragment, useState } from 'react'

const NewApp = () => {
    const [isModal, setIsModal] = useState(false)
    const [values, setValue] = useState({ id: '', name: '', age: '', image: '' })
    const [items, setItems] = useState(data)

    const onSubmit = () => {
        if (values?.id) {
            const newData = items?.map((value) => {
                if (value?.id === values?.id) {
                    return { ...value, ...values }
                }
                return value;
            });
            setItems(newData)
            setIsModal(false)
        } else {
            setItems([...items, { id: items?.length + 1, name: values?.name, age: values?.age, image: values?.image }])
            setIsModal(false)
        }
    }
    const onDelete = (id, indexx) => {
        // setItems(values => { return values?.filter((value) => value?.id !== id) });
        setItems([...items?.slice(0, indexx), ...items?.slice(indexx + 1)])
    }

    const HandleEdit = (data) => {
        setValue(data)
        setIsModal(true)
    };

    const hndleFile = (event) => {
        URL.createObjectURL(event)
        const fromData = new FormData();
        fromData.append('File', event)
        setValue({ ...values, image: URL.createObjectURL(event) })
        // console.log(URL.createObjectURL(event))
    }


    return (
        <Fragment>
            {!items?.length ?
                <div style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <div>
                        <h3 style={{ textAlign: 'center' }}>No Records</h3>
                        <button onClick={() => setIsModal(true)} style={{ backgroundColor: 'green', color: '#FFFFFF', fontSize: 14, outline: 'none', border: 'none', borderRadius: 5, margin: 5, padding: '5px 15px 5px 15px', textTransform: 'uppercase', cursor: 'pointer' }}>Add New</button>
                    </div>
                </div>
                :
                <div style={{ backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                    <button onClick={() => setIsModal(true)} style={{ backgroundColor: 'green', color: '#FFFFFF', fontSize: 14, outline: 'none', border: 'none', borderRadius: 5, margin: 5, padding: '5px 15px 5px 15px', textTransform: 'uppercase', cursor: 'pointer' }}>Add New</button>
                    {items?.sort((a, b) => a?.name > b?.name ? 1 : -1)?.map((value, indexx) => (
                        <div key={indexx} style={{ padding: 10, marginTop: 10, backgroundColor: '#FFFFFF', boxShadow: '2px' }}>
                            <h5>Id: {value?.id}</h5>
                            <h5>Name: {value?.name}</h5>
                            <h5>Age: {value?.age}</h5>

                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <button onClick={() => { HandleEdit(value) }} style={{ backgroundColor: 'green', color: '#FFFFFF', fontSize: 14, outline: 'none', border: 'none', borderRadius: 5, margin: 5, padding: '5px 15px 5px 15px', textTransform: 'uppercase', cursor: 'pointer' }}>Edit</button>
                                <button onClick={() => { onDelete(value?.id, indexx) }} style={{ backgroundColor: 'red', color: '#FFFFFF', fontSize: 14, outline: 'none', border: 'none', borderRadius: 5, margin: 5, padding: '5px 15px 5px 15px', textTransform: 'uppercase', cursor: 'pointer' }}>delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            }


            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, button: 0, backgroundColor: '#0000004e', width: '100%', height: '100vh', display: isModal ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                <div style={{ width: 500, height: 400, alignItems: 'center', justifyContent: 'center', display: 'flex', backgroundColor: '#FFFFFF', borderRadius: 8, zIndex: 99999 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }}>
                        {values?.id ?
                            <div style={{ padding: 10 }}>
                                <input style={{ outline: 'none', height: 20, }} readOnly={true} placeholder='Id' value={values?.id} onChange={(event) => setValue({ ...values, id: event?.target?.value })} />
                            </div> : null}

                        <div style={{ padding: 10 }}>
                            <input style={{ outline: 'none', height: 20, }} placeholder='Name' value={values?.name} onChange={(event) => setValue({ ...values, name: event?.target?.value })} />
                        </div>
                        <div style={{ padding: 10 }}>
                            <input type='number' style={{ outline: 'none', height: 20, }} placeholder='Age' value={values?.age} onChange={(event) => setValue({ ...values, age: event?.target?.value })} />
                        </div>
                        <div style={{ padding: 10 }}>
                            <input type='file' style={{ outline: 'none', height: 20, }} placeholder='Age' /* value={values?.age} */ onChange={(event) => hndleFile(event?.target?.files[0])} />
                        </div>
                        <img alt='' src={values?.image} style={{ width: 100, height: 100 }} />
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ padding: 10, width: '100%' }}>
                                <button onClick={() => { setValue({ id: '', name: '', age: '' }); setIsModal(false) }} style={{ backgroundColor: 'red', color: '#FFFFFF', fontSize: 14, outline: 'none', border: 'none', borderRadius: 5, margin: 5, padding: '5px 15px 5px 15px', textTransform: 'uppercase', cursor: 'pointer' }}>Cancle</button>
                            </div>
                            <div style={{ padding: 10, width: '100%' }}>
                                <button disabled={!values?.name || !values?.age} onClick={() => { onSubmit(); setValue({ id: '', name: '', age: '', image: '' }) }} style={{ backgroundColor: 'green', color: '#FFFFFF', fontSize: 14, outline: 'none', border: 'none', borderRadius: 5, margin: 5, padding: '5px 15px 5px 15px', textTransform: 'uppercase', cursor: 'pointer' }}>{values?.id ? 'UPDATE' : 'ADD'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NewApp;

const data = [
    // { id: 1, name: 'Kapil Biswas', age: 25 },
    // { id: 2, name: 'Prem  Biswas', age: 23 },
    // { id: 3, name: 'Rajiv Biswas', age: 20 },
]