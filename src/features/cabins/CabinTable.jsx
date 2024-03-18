import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  // FILTER
  const filterValue = searchParams.get("discount") || "all"; //sort sercuting
  let filteredCabins;
  if (filterValue === "all") {
    filteredCabins = cabins;
  }
  if (filterValue === "no-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  }
  if (filterValue === "with-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction.toLowerCase() === "asc" ? 1 : -1;

  let sortedCabins;
  if (cabins.length && field && cabins[0].hasOwnProperty(field)) {
    // Ensure field exists and handle case insensitivity
    sortedCabins = [...filteredCabins].sort((a, b) => {
      const valueA = String(a[field]).toLowerCase();
      const valueB = String(b[field]).toLowerCase();
      return (valueA > valueB ? 1 : -1) * modifier;
    });
  } else {
    // Default sorting behavior if field doesn't exist or not specified
    sortedCabins = filteredCabins;
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          // data={cabins}
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
