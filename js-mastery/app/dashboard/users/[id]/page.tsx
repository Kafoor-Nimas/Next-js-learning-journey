
const UsersDetails = async({params}:{params: Promise<{id: string}>}) => {
    const {id} = await params;
  return (
    <div>
        <h1>Showing user details for user #{id}</h1>
    </div>
  )
}

export default UsersDetails