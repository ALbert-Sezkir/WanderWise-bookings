import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUsers";
import ListingClient from "./ListingClient";

interface IParams {
    listingId?: string; 
}

const ListingPage = async ({ params }: { params: IParams }) => {
    const listing = await getListingById(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <div className="">
                <ListingClient 
                    listing={listing} 
                    currentUser={currentUser} 
                />
            </div>
        </ClientOnly>
    );
};

export default ListingPage;