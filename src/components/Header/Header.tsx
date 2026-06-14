import type {ReactNode} from "react";
import MingcuteFacebookFill from "@/icons/MingcuteFacebookFill.tsx";
import MingcuteInstagramLine from "@/icons/MingcuteInstagramLine.tsx";
import MingcuteTwitterFill from "@/icons/MingcuteTwitterFill.tsx";
import {Button} from "@/components/ui/button";
import {LanguageSwitcher} from "@/components/LanguageSwitcher/LanguageSwitcher.tsx";
import {useTranslation} from "react-i18next";

export const Header = (): ReactNode => {
    const {t} = useTranslation()
    return <header className="py-5">
        <div className="container pb-2.5 flex items-center justify-between">
            <a href="/" className="no-underline flex items-end">
                <h1 className="text-3xl font-normal text-primary font-heading m-0">{t("site name")}</h1>
            </a>
            <div className="flex items-center justify-center">
                <div className="flex items-center">
                    <Button size="lg" variant="link" className="hover:text-accent" title="facebook">
                        <MingcuteFacebookFill/>
                    </Button>
                    <Button size="lg" variant="link" className="hover:text-accent" title="Twitter">
                        <MingcuteTwitterFill/>
                    </Button>
                    <Button size="lg" variant="link" className="hover:text-accent" title="Instagram">
                        <MingcuteInstagramLine/>
                    </Button>
                </div>
                <LanguageSwitcher/>
            </div>

        </div>
    </header>
};