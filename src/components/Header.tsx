const Header = () => {
    return (
        <div className="flex justify-between px-4 bg-gray-500">
            <div>
                LOGO
            </div>
            <div className="flex gap-4">
                <div className="cursor-pointer">Home</div>
                <div className="cursor-pointer">About</div>
                <div className="cursor-pointer">Contact Us</div>
                <div className="cursor-pointer">Services</div>
            </div>
        </div>
    )
}
export default Header