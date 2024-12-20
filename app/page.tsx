import getCurrentUser from "./actions/getCurrentUsers";
import getListings, { IListingsParams } from "./actions/getListings";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import ClientOnly from "./components/ClientOnly";

interface HomeProps {
  searchParams: IListingsParams
}

const Home = async ({searchParams}: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    <ClientOnly>
    return <EmptyState showReset />;
    </ClientOnly>
  }

  

  return (
    <ClientOnly>

      <Container>
      <div
        className="
        pt-24 
        grid 
        grid-cols-1 
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        "
        >
        {listings.map((listing) => {
          return (
            <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
            />
          );
        })}
      </div>
    </Container>
        </ClientOnly>
  );
}

export default Home;

