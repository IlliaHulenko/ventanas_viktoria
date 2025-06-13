
const LoaderSpinner = () => {
    return (
        <div className="flex-center fixed z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
            <div className="loader">
                <div className="spinner" />
                <img
                    src={import.meta.env.BASE_URL + '/img/logo.svg'}
                    alt="logo"
                    className="icon"
                />
            </div>
        </div>
    )
}

export default LoaderSpinner