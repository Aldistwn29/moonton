import Sidebar from "@/Layouts/Authenticated/sidebar";
import Topbar from "@/Layouts/Authenticated/topbar";
export default function Authenticated({ auth, children }) {
    return (
        <>
            <div className="hidden mx-auto max-w-screen lg:block">
                {/* Star: Siderbar */}
                <Sidebar />
                {/* End: Siderbar */}
            </div>
            <div className="ml-[300px] px-[50px]">
                <div className="py-10 flex flex-col gap-[50px]">
                    {/* Star:Topbar */}
                    <Topbar name={auth.user.name}/>
                    {/* End:Topbar */}
                </div>
                {/* Star: Content */}
                <main>{children}</main>
                {/* End: Content */}
            </div>
            <div className="flex w-full h-screen px-4 mx-auto bg-black lg:hidden">
                <div className="my-auto text-2xl font-medium leading-snug text-center text-white">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}