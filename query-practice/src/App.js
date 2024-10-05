import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const POST = [
  {id: 1, title: "Post 1"},
  {id: 2, title: "Post 2"},
  {id: 3, title: "Post 3"},
]


function App() {
const queryClient = useQueryClient();
const postsQuery = useQuery({
  queryKey: ["posts"],
  queryFn: ()=> wait(1000).then(() => [...POST])
})

const newPostMutation = useMutation({
  mutationFn: title => {
    return wait(1000).then(()=> 
      POST.push({id: crypto.randomUUID(), title})
    )
  },
  onSuccess: () => {
    queryClient.invalidateQueries(["posts"])
  }
})

if(postsQuery.isLoading) return <h1>Loading....</h1>;
if(postsQuery.isError) {
  return <pre>{JSON.parse(postsQuery.error)}</pre>;
}
  return (
      <div>
        {postsQuery.data.map(post => <h1 key={post.id}>{post.title}</h1>)}
        <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("New Post")}
        >Add New Post</button>
      </div>
  );
}

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default App;
