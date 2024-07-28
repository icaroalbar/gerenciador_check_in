import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Button } from "../../components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AlertCircle, LoaderCircle } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export default function Login() {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setButtonDisabled(true);
    try {
      const response = await axios.post(
        "https://api.dev.galgjur.com.br/login",
        values
      );
      const { AccessToken } = response!.data.user.AuthenticationResult;
      localStorage.setItem("token", AccessToken);
      console.log(AccessToken)
      navigate("/");
    } catch (error: any) {
      setErrorLogin(error.response?.data?.error || "Houve um erro");
    } finally {
      setTimeout(() => {
        form.reset()
        setErrorLogin(null);
      }, 3000);
      setButtonDisabled(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-primary-foreground">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Acesso ao sistema</CardTitle>
          <CardDescription>
            Faça seu login para acessar as informações.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-8">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input disabled={buttonDisabled} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input disabled={buttonDisabled} type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Alert
                variant="destructive"
                className={`items-center gap-x-2 mt-2 ${
                  errorLogin ? "flex" : "hidden"
                }`}
              >
                <AlertCircle size={20} />
                <AlertTitle>{errorLogin}</AlertTitle>
              </Alert>
              <Button
                disabled={buttonDisabled}
                className={`w-full ${errorLogin ? "mt-2" : "mt-8"}`}
              >
                {buttonDisabled ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
