import Authenticated from "@/Layouts/Authenticated/Index";
import SubpscriptionCard from "@/Components/Subsctiption";
import { Head, router } from '@inertiajs/react';

export default function SubscriptionPlan({ auth, subscriptionPlans, env }) {
    const selectSubscription = id => {
        router.post(route('user.dashboard.subscription.subscribe', {
            subscriptionPlan: id
        }), {},
            {
                only: ['userSubscription'],
                onSuccess: ({ props }) => {
                    onMidtrans(props.userSubscription);
                },
            }
        );
    }
    // data dari midtrans
    const onMidtrans = (userSubscription) => {
        snap.pay(userSubscription.snap_token, {
            onSuccess: function (result) {
                router.visit(route('user.dashboard.index'));
            },
            // Optional
            onPending: function (result) {
                console.log({ result });
            },
            // Optional
            onError: function (result) {
                console.log({ result });
            },
        });
    };

    return <Authenticated auth={auth}>
        <Head title="Subscription Plans">
            <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={env.MIDTRANS_CLIENTKEY}></script>
        </Head>
        <div className="flex flex-col items-center py-20">
            <div className="text-black font-semibold text-[26px] mb-3">
                Pricing For Everyone
            </div>
            <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                Invest your little money to get a whole new exprience from movies.
            </p>
            {/* pricing card */}
            <div className="flex justify-center gap-10 mt-[70px]">
                {subscriptionPlans.map((subscriptionPlan, index) => (
                    <SubpscriptionCard
                        name={subscriptionPlan.name}
                        price={subscriptionPlan.price}
                        durationInMonth={subscriptionPlan.active_periode_in_months}
                        features={JSON.parse(subscriptionPlan.featured)}
                        isPremium={subscriptionPlan.name === 'premium'}
                        key={subscriptionPlan.id}
                        onSelectionSubscription={() => selectSubscription(subscriptionPlan.id)}
                    />
                ))}
            </div>
            {/* END: For Greatest */}
        </div>
    </Authenticated>;
}