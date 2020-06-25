import React, { FC } from "react";
import styled from "styled-components";
import { BinderMenu } from "../components/BinderMenu"

const Box = styled.div`
  display: flex;
  justify-content: center; 
`

const customStyle = {
    height: "150px",
    background: "#f5f2f7",
    border: "1px solid #e6e0ea",
    marginTop: "200px",
    borderRadius: "4px",
}

export const Main: FC<HTMLDivElement> = () => {
 
function updateVCSInfo(e: React.FormEvent<HTMLFormElement>, provider: string | undefined, org: string | undefined, repo: string | undefined, gitRef: string | undefined){
    const url = `${window.location.href}p/${provider}/${org}/${repo}/${gitRef}`
    window.open(url, "_self");
    e.preventDefault()
}

return (
  <Box>
              <BinderMenu
                        provider="gh"
                        org="nteract"
                        repo="examples"
                        gitRef="master"
                        updateVCSInfo={updateVCSInfo}
                        style={customStyle}
              />

  </Box>
      );
}

export default Main
