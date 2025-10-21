import { Link } from "@inertiajs/react";
import MenuItem from "./menuItem";
import { userMenu, userOthers} from "./menulist";
import SubscriptionDetails from '@/Layouts/Authenticated/subscriptionDetails';

export default function Sidebar({ auth }) {
    return (
        <>
            <aside className="fixed z-50 w-[300px] h-full">
                <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                    <a href="/">
                        <img src="/assets/images/moonton.svg" alt="" />
                    </a>
                    <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                        {/* <!-- Menu --> */}
                        <div>
                            <div className="mb-4 text-sm text-gray-1">Menu</div>
                            {userMenu.map((menu, index) => (
                                <MenuItem 
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={
                                        menu.link && menu.link !== '#' ? route().current(menu.link) : false
                                    }
                                />
                            ))}
                        </div>
                        {/* <!-- ./Menu --> */}
                        {/* <!-- Others --> */}
                        <div>
                            <div className="mb-4 text-gray-1 side-link">Others</div>
                                {userOthers.map((menu, index) => (
                                <MenuItem 
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={
                                        menu.link && menu.link !== '#' ? route().current(menu.link) : false
                                    }
                                    method={menu.method}
                                />
                            ))}
                        </div>
                        {/* <!-- ./Others --> */}
                        {auth.activePlan && (
                            <SubscriptionDetails 
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.isPremium}
                            remainingActiveDays={auth.activePlan.remainingActiveDays}
                            activeDays={auth.activePlan.activeDays}
                            />
                        )}
                    </div>
                </div>
            </aside>
        </>
    )
}