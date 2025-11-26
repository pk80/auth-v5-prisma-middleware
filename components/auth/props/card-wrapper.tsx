'use client'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import React from "react"
import AuthHeader from "./auth-header"
import BackButton from "./back-button"

interface CardWrapperProps {
    children: React.ReactNode
    headerLabel: string
    backButtonLabel: string
    backButtonHref: string
    title: string
    showSocial: boolean

}

const CardWrapper = ({ children, headerLabel, backButtonLabel, backButtonHref, title, showSocial }: CardWrapperProps) => {
    return (
        <Card className="xl:w-1/4 md:w-1/2 shadow-md mx-auto mt-4">
            <CardHeader>
                <AuthHeader label={headerLabel} title={title} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    )
}

export default CardWrapper