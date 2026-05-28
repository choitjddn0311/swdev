import { getTranslations } from "next-intl/server";

const Footer = async () => {
    const t = await getTranslations("footer");

    return (
        <footer className="w-full h-15 2xl:h-25 xl:h-25 lg:h-20 md:h-20 sm:h-15 flex justify-center border-t-1 border-foreground/10 bg-background text-foreground">
            <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 h-full flex justify-center items-center 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between">
                <p className="text-sm">{t("rights")}</p>
                <ul>
                    <li className="hidden 2xl:block xl:block lg:block md:block sm:block text-sm">
                        {t("developer")}
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
