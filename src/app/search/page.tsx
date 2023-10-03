function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: any };
}) {
  return <div>{searchParams.query}</div>;
}

export default SearchPage;
