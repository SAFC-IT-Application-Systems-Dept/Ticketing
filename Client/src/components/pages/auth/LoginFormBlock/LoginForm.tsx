import React from "react";
import { Box, Container, Typography, Link, Paper } from "@mui/material";
import { AtomButton, AttomTextField } from "@/components";
import { LoginFormType } from "@/core/Schema";
import { FormProps } from "@/core/types";

type LoginFormProps = FormProps<LoginFormType>;

export default function LoginForm(props: LoginFormProps) {
  return (
    <Container
      component="main"
      maxWidth="md"
      className="h-screen flex items-center flex-col justify-center"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper elevation={0} sx={{ padding: 4, width: "100%" }} className=" ">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography component="h1" variant="h5" className="">
              Sign in
            </Typography>
          </Box>
          <Box>
            <AttomTextField
              name="username"
              control={props.control}
              label="Username"
            />
            <AttomTextField
              name="password"
              control={props.control}
              label="Password"
              type="password"
            />
            <AtomButton
              type="submit"
              fullWidth
              variant="contained"
              label={props.isLoading ? "Signing In..." : "Sign In"}
              onClick={props.handleSubmit(props.onSubmit)}
              isLoading={props.isLoading}
              disabled={props.isLoading}
            />
          </Box>
        </Paper>
      </Box>
      <Typography variant="body2" className="">
        Dental POS ©{" "}
        <Link color="inherit" href="">
          J's Company
        </Link>
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}
