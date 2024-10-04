import { useQuery, useMutation } from "@tanstack/react-query";

const POST = [
  {id: 1, title: "Post 1"},
  {id: 2, title: "Post 2"},
  {id: 3, title: "Post 3"},
]


function App() {

const postsQuery = useQuery({
  queryKey: ["posts"],
  queryFn: ()=> wait(1000).then(() => [...POST])
})

if(postsQuery.isLoading) return <h1>Loading....</h1>;
if(postsQuery.isError) {
  return <pre>{JSON.parse(postsQuery.error)}</pre>;
}
  return (
      <div>
        {postsQuery.data.map(post => <h1 key={post.id}>{post.title}</h1>)}
      </div>
  );
}

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default App;
