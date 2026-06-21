import ClientComponentOne from "@/components/client-component-one";
import ServerComponentOne from "@/components/server-component-one";
import React from "react";

// Any component nested under Client component automatically becomes a client components.
// Server component can’t be import directly in client component.

// Solution: instated of nesting server component under client component, pass server component as a props into the client component. This approach children props pass server component is known as slot.

export default function InterleavingPage() {
  return (
    <div>
      InterleavingPage
      {/* <ServerComponentOne /> */}
      {/* <ClientComponentOne /> */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </div>
  );
}
