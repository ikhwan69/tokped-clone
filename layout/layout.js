
export default function Layout( { children }){
    const bg_image = "https://i.ibb.co/D8NN1nY/bg-login.png"
    return (
        <div className="">
            <div className="bg-hero bg-no-repeat bg-cover bg-center w-80%">
                {children}
            </div>                
        </div>
    )
}
