"use client"

import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"
import Script from "next/script"

interface GooglePlacesInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  className?: string
  id?: string
}

declare global {
  interface Window {
    google: any
  }
}

export function GooglePlacesInput({
  value,
  onChange,
  placeholder = "Enter your address",
  required = false,
  className = "",
  id = "address-input",
}: GooglePlacesInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [scriptUrl, setScriptUrl] = useState<string | null>(null)
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null)

  // Fetch the Maps API script URL from our secure API route
  useEffect(() => {
    async function fetchScriptUrl() {
      try {
        const response = await fetch("/api/maps-api")
        const data = await response.json()
        setScriptUrl(data.scriptUrl)
      } catch (error) {
        console.error("Failed to load Google Maps script URL:", error)
      }
    }

    fetchScriptUrl()
  }, [])

  useEffect(() => {
    if (scriptLoaded && inputRef.current && !autocomplete) {
      const options = {
        componentRestrictions: { country: "us" },
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
      }

      const newAutocomplete = new window.google.maps.places.Autocomplete(inputRef.current, options)

      // Prevent form submission on enter key (which would otherwise select the first autocomplete option)
      inputRef.current.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          if (document.activeElement === inputRef.current) {
            e.preventDefault()
          }
        }
      })

      newAutocomplete.addListener("place_changed", () => {
        const place = newAutocomplete.getPlace()
        if (place.formatted_address) {
          onChange(place.formatted_address)
        }
      })

      setAutocomplete(newAutocomplete)
    }
  }, [scriptLoaded, onChange, autocomplete])

  return (
    <>
      {scriptUrl && <Script src={scriptUrl} onLoad={() => setScriptLoaded(true)} strategy="lazyOnload" />}
      <div className="relative w-full">
        <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={inputRef}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={`pl-10 ${className}`}
          autoComplete="off"
        />
      </div>
    </>
  )
}
