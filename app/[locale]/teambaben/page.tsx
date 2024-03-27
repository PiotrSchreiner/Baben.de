import TeamBaben from "@/components/TeamBaben";

function page() {
  return (
    <div>
      <TeamBaben onSubmit={console.log} />
    </div>
  );
}

export default page;
