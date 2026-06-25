import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <UserProfile path="/user-profile" />
      </div>
    </>
  );
}
