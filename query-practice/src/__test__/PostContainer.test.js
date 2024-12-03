import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {rest} from 'msw';
import { setupServer } from "msw/node";
import PostContainer from "../components/PostContainer";


const handler = [
  rest.get('/post',(req, res, ctx) => {
    return res(
      ctx.json([
        {title: 'Post one', body: 'Post one body'},
        {title: 'Post two', body: 'Post two body'},
        {title: 'Post three', body: 'Post three body'}
    ])
    )
  })
]

const server = setupServer(...handler);

beforeAll(()=>{
  server.listen();
})

afterEach(()=>{
  server.resetHandlers();
})

afterAll(()=>{
  server.close();
})



const renderPostContainer = () => {
  render(<PostContainer />);
}

test("PostContainer is rendered", () => {
  renderPostContainer();
  const heading = screen.getByText("Post Container:");
  expect(heading).toBeInTheDocument();
});

test("Post Container should render correct posts.", () => {
  renderPostContainer();

  const allPost = screen.getAllByRole('article');

  expect(allPost).toHaveLength(2);
})
