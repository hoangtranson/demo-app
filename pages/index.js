import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import useSWR from 'swr';

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

// const indexPageContent = <p>Hello Next.js</p>;

// export default function Index() {
//     return <Layout content={indexPageContent} />;
// }

const TodoList = props => {
    const todos = props.todos;

    if (todos) {
        return (
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <Link href="/todo/[id]" as={`/todo/${todo.id}`}>
                            <a>{todo.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
    return (
        <ul>
            <li>Loading ...</li>
        </ul>
    )

}

export default function Index() {
    const { data, error } = useSWR('http://localhost:3000/api/todos', fetcher);
    let todos = data;

    if (!data) todos = [];
    if (error) todos = [];

    return (
        <Layout>
            <h1>ToDo List</h1>
            <TodoList todos={todos} />
            <style jsx>{`
                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: blue;
                    font-family: 'Arial';
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </Layout>
    );
}
