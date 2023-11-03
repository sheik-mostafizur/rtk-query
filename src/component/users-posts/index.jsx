import {useGetPostsQuery, useGetUsersQuery} from "../../redux/api/fakeDataApi";

const UsersPosts = () => {
  const {data: postsList, isLoading: postsLoading} = useGetPostsQuery();
  const {data: users, isLoading: usersLoading} = useGetUsersQuery();
  return (
    <div>
      <h1>UsersPosts</h1>
      {usersLoading ? (
        "users loading..."
      ) : (
        <div>
          <h2>User List</h2>
          <ul>{JSON.stringify(users)}</ul>
        </div>
      )}

      {postsLoading ? (
        "post Loading..."
      ) : (
        <div>
          <h2>Post List</h2>
          {JSON.stringify(postsList)}
        </div>
      )}
    </div>
  );
};

export default UsersPosts;
