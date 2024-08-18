import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  BookmarkIcon,
  ChevronDownIcon,
  ListBulletIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

import logo from "../assets/images/cutlery.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center space-x-2">
            <img alt="Logo" src={logo} className="h-8 w-auto" />
            {/* Display the app name next to the logo */}
            <span className="text-xl font-bold text-gray-900">Meals App</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-gray-700"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="flex items-center text-sm font-semibold text-gray-900"
          >
            <HomeIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            Home
          </Link>
          <Link
            to="/favorites"
            className="flex items-center text-sm font-semibold text-gray-900"
          >
            <BookmarkIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            Favorites
          </Link>
          <Link
            to="/categories"
            className="flex items-center text-sm font-semibold text-gray-900"
          >
            <ListBulletIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            Categories
          </Link>
          <Link
            to="/ingredients"
            className="flex items-center text-sm font-semibold text-gray-900"
          >
            <ClipboardDocumentListIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            Ingredients
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm font-semibold text-gray-900">
            Log in
          </Link>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 bg-black/30" />
        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img alt="Logo" src={logo} className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-900">Meals App</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            <Disclosure as="div">
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Meals App
                    <ChevronDownIcon
                      className={`h-5 w-5 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    <Link
                      to="/"
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <HomeIcon
                        className="inline h-5 w-5 mr-1"
                        aria-hidden="true"
                      />
                      Home
                    </Link>
                    <Link
                      to="/favorites"
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <BookmarkIcon
                        className="inline h-5 w-5 mr-1"
                        aria-hidden="true"
                      />
                      Favorites
                    </Link>
                    <Link
                      to="/categories"
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <ListBulletIcon
                        className="inline h-5 w-5 mr-1"
                        aria-hidden="true"
                      />
                      Categories
                    </Link>
                    <Link
                      to="/ingredients"
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <ClipboardDocumentListIcon
                        className="inline h-5 w-5 mr-1"
                        aria-hidden="true"
                      />
                      Ingredients
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Link
              to="/login"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              Log in
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
