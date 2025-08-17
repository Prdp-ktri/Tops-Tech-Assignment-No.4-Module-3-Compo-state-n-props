
function UserCard({ name, age, location }) {

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md border">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Name: {name}</h2>
      <h4 className="text-gray-600">
        <span className="font-semibold">Age:</span> {age}
      </h4>
      <p className="text-gray-600">
        <span className="font-semibold">Location:</span> {location}
      </p>
    </div>
  );
}

export default UserCard;
