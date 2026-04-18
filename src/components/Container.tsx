import React from 'react'
import { cn } from '../lib/utils'

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    url_img?: string;
    classOverlay?: string;
    overlay?: boolean;
    classNameUrlImg?: string;
    classNameContent?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Container({
    children,
    className,
    classOverlay,
    classNameUrlImg,
    classNameContent,
    url_img,
    overlay = false,
    ...props

}: ContainerProps) {
    return (
        <div className={cn(
            "relative flex w-full flex-col overflow-x-clip overflow-y-scroll scrollbar-hide",
            className
        )}>
            {url_img && (
                <div className={cn(
                    "absolute inset-0 z-0 pointer-events-none select-none",
                    classNameUrlImg
                )}>
                    <img
                        src={`${url_img}`}
                        alt=""
                        className={cn(
                            "w-full object-cover h-full object-cover object-center",
                        )}
                    />
                </div>
            )}

            {overlay && (
                <div className={cn(
                    "absolute z-1 bg-gray-400/40 w-full h-full",
                    classOverlay
                )}></div>
            )}

            <div className={cn(
                "flex relative h-full z-10 max-w-[1240px] w-full mx-auto flex-col px-4",
                classNameContent
            )}>
                {children}
            </div>
        </div>
    )
}

