'use client'
import React from "react";
import { Inter } from "next/font/google";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Link from 'next/link';
import { FaFolder } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaStickyNote } from 'react-icons/fa';;
import { FaFile } from 'react-icons/fa';
import { FaCodeBranch } from 'react-icons/fa';
import { FaStopwatch } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [toggled, setToggled] = React.useState(false);
  const { useRouter } = require('next/navigation');
  const router = useRouter()

  const handleLogout = async () => {
    const data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({})
    };
    const response = await fetch('/api/auth/logout', data)
    if (response) {
      const data = await response.json();
      if (data.message === "Success") {
        // Supprimer le token du localStorage
        localStorage.removeItem('token');

        router.push('/authentication/login');
      }
    }
    else {
      console.log('Error')
      setError('Erreur de se déconnecter')
    }

  };
  return (
    <html lang="en">
      <body>
        <div className="w-full h-auto md:h-screen bg-blue-100">
          <div className="w-[100%] h-full" style={{ display: "flex" }}>
            <Sidebar
              onBackdropClick={() => setToggled(false)}
              toggled={toggled}
              breakPoint="lg"
            >
              <Menu>
                <div className="border rounded-md">
                  <MenuItem
                    icon={<FaHome />}
                    className="text-slate-700 text-md font-bold"
                  >
                    {" "}
                    Home{" "}
                  </MenuItem>
                </div>
                <div className="border rounded-md">
                  <SubMenu icon={<FaFolder />} label="Dossiers">
                    <MenuItem
                      icon={<FaFolder />}
                      component={<Link href="/Secretaire/Dossier/Standard" />}
                    >
                      {" "}
                      dossiers standards{" "}
                    </MenuItem>
                    <MenuItem
                      icon={<FaFolder />}
                      component={<Link href="/Secretaire/Dossier/Structure" />}
                    >
                      {" "}
                      dossiers structurés{" "}
                    </MenuItem>
                  </SubMenu>
                </div>
                <div className="border rounded-md">
                  <SubMenu icon={<FaUser />} label="Clients ">
                    <MenuItem
                      icon={<FaUser />}
                      component={<Link href="/Secretaire/Clients/Standards" />}
                    >
                      {" "}
                      clients standards{" "}
                    </MenuItem>
                    <MenuItem
                      icon={<FaUser />}
                      component={<Link href="/Secretaire/Clients/Structures" />}
                    >
                      {" "}
                      clients structures{" "}
                    </MenuItem>
                  </SubMenu>
                </div>
                <div className="border rounded-md">
                  <MenuItem
                    icon={<FaStickyNote />}
                    component={<Link href="/Secretaire/Ecritures" />}
                    className="text-slate-700 text-md font-bold"
                  >
                    {" "}
                    Ecritures{" "}
                  </MenuItem>
                </div>
                <div className="border rounded-md">
                  <MenuItem
                    icon={<FaFileInvoiceDollar />}
                    component={<Link href="/Secretaire/Caisses" />}
                    className="text-slate-700 text-md font-bold"
                  >
                    {" "}
                    Caisses{" "}
                  </MenuItem>
                </div>
                <div className="border rounded-md">
                  <MenuItem
                    icon={<FaFile />}
                    component={<Link href="/Secretaire/RapportSecretaire" />}
                    className="text-slate-700 text-md font-bold"
                  >
                    {" "}
                    Rapport{" "}
                  </MenuItem>
                </div>
                <div className="border rounded-md">
                  <MenuItem
                    icon={<FaCodeBranch />}
                    className="text-slate-700 text-md font-bold"
                  >
                    {" "}
                    Condensé{" "}
                  </MenuItem>
                </div>
                <div className="border rounded-md">
                  <MenuItem
                    icon={<FaStopwatch />}
                    component={<Link href="/Secretaire/DemandeCong" />}
                    className="text-slate-700 text-md font-bold"
                  >
                    {" "}
                    Demande De Congé{" "}
                  </MenuItem>
                </div>
              </Menu>
            </Sidebar>
            <main
              className="w-[100%] h-full"
              style={{ display: "flex", padding: 10 }}
            >
              <div className="w-full h-full">
                <div className="block lg:hidden">
                  <button
                    className="sb-button"
                    onClick={() => setToggled(!toggled)}
                  >
                    <FaBars />
                  </button>
                </div>
                <div className="w-[100%] h-auto">
                  <div>
                    <Header />
                  </div>
                  <div className="w-[100%] h-[25.5rem] mt-4 overflow-y-auto bg-white rounded-md ">
                    {children}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
