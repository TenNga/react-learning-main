import Link from "next/link";

function Blog(){
    const blogTotal = 10;
    return(
        <div>
            <Link href='/'>Home</Link>
            <h1>Main Blog Page:</h1>
            <ul>
                <li><Link href='/blog/1'>Blog # 1</Link></li>
                <li><Link href='/blog/2'>Blog # 2</Link></li>
                <li><Link href='/blog/3'>Blog # 3</Link></li>
                <li><Link href={`/blog/${blogTotal}`}>Blog # {blogTotal}</Link></li>
            </ul>
        </div>
    )
};

export default Blog;