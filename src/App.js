// src/App.js
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import MyDeFiApp from "./contracts/MyDeFiApp.json";

const App = () => {
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);

    useEffect(() => {
        const loadBlockchainData = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            setAccount(address);

            const networkId = await provider.getNetwork();
            const networkData = MyDeFiApp.networks[networkId.chainId];
            if (networkData) {
                const contract = new ethers.Contract(networkData.address, MyDeFiApp.abi, signer);
                setContract(contract);
            } else {
                window.alert("Smart contract not deployed to detected network.");
            }
        };

        loadBlockchainData();
    }, []);

    return (
        <div>
            <h1>My DeFi App</h1>
            <p>Your account: {account}</p>
        </div>
    );
};

export default App;
