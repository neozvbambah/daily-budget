import Image from "next/image"
export function Header() {
    return (
        <div className="-mt-3 drop-shadow-md hover:drop-shadow-xl rounded-lg w-56 bg-prim">
            <div className="flex justify-evenly mt-4">
                <h1 className='w-84 text-sec font-jet p-5 text-3xl font-extrabold'>Montrol </h1>
                <h1 className="mt-4 -ml-5 text-5xl">&#129689;</h1>
            </div>
        </div>
    )
}