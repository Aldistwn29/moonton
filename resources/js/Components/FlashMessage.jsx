export default function FlashMessage({ className, message = ""}){
    return (
        <>
        <div className={`flex bg-green-100 rounded p-4 mt-4 mb-8 text-sm text-green-700 ${className}`}>
            {message}
        </div>
        </>
    )
}