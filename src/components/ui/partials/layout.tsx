import { LogOut } from "lucide-react";
import { Button } from "../button";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

type ILayout = {
  children: ReactNode
}

export default function Layout({children}: ILayout) {
  const navigate = useNavigate();

  async function logout() {
    navigate("/login");
  }

  return (
    <div>
      <nav className="flex justify-end container pt-4">
        <div>
          <Button onClick={logout} className="text-slate-500" variant="ghost">
            <LogOut className="mr-2 h-4 w-4" />
            sair
          </Button>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
}
