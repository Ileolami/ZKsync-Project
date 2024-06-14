import { createThirdwebClient } from "thirdweb";

import { ConnectButton } from "thirdweb/react";

const client = createThirdwebClient({ clientId: 'b48165bc64b4817f7ea74fe38dc2fc82'});

export default function ConnectBtn() {
  return (
    <nav className="flex justify-end m-5">
      <ConnectButton client={client} />
    </nav>
  );
}
