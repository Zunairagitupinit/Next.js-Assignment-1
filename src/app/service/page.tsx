import Link from "next/link";

const service = ()=>{
    return(
        <div>
            <h2> Service Page</h2>
            <br/>

            <ul>
                <h3>
                    <p>I will give you following services</p>
                    <br/>
                <li><Link href="/service/video-editing"> video-editing</Link></li>
                <br/>
                <li><Link href="/service/webdevelopment"> webdevelopment</Link></li>
                <br/>
                </h3>
            </ul>
        </div>
    )
}
export default service;