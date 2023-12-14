"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import qs from "query-string";

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // TODO: for fetching the category id for querries controlling the current loaded category
  // currently useless
  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [value, setValue] = useState(name || "");
  const debounceValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const query = {
      name: debounceValue,
      categoryId: categoryId,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debounceValue, router, categoryId]);

  return (
    <div className="relative">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input
        placeholder="Search..."
        onChange={onChange}
        value={value}
        className="pl-10 bg-primary/10"
      />
    </div>
  );
};
