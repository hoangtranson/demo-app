import React from 'react';
import MaterialTable from 'material-table';
import { tableIcons } from '../components/table-icons';
import Layout from '../components/Layout';
// import Todos from '../components/Todos';
// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';
// import useSWR from 'swr';


// function fetcher(url) {
//     return fetch(url).then(r => r.json());
// }


// export default function Index() {
//     const { data, error } = useSWR('/api/todos', fetcher);
//     let todos = data;

//     if (!data) todos = [];
//     if (error) todos = [];

//     return (
//         <Layout>
//             <Todos />
//         </Layout>
//     );
// }

export default function Index() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
        ],
        data: [
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            {
                name: 'Zerya Betül',
                surname: 'Baran',
                birthYear: 2017,
                birthCity: 34,
            },
        ],
    });

    return (
        <Layout>
            <MaterialTable
                title="Editable Example"
                icons={tableIcons}
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState(prevState => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
            />
        </Layout>
    );
}
