# Graph Report - .  (2026-07-01)

## Corpus Check
- Large corpus: 288 files ╖ ~4,329,687 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 927 nodes · 1163 edges · 107 communities (93 shown, 14 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 79|Community 79]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 69 edges
2. `Footer()` - 23 edges
3. `compilerOptions` - 20 edges
4. `adminFetch()` - 19 edges
5. `compilerOptions` - 18 edges
6. `useAuth()` - 17 edges
7. `scripts` - 16 edges
8. `apiUrl()` - 14 edges
9. `compilerOptions` - 14 edges
10. `handler()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `ProductsPage()` --calls--> `useAuth()`  [INFERRED]
  src/pages/ProductsPage.tsx → src/context/useAuth.ts
- `uploadToS3()` --calls--> `adminFetch()`  [EXTRACTED]
  admin/src/pages/BannersPage.tsx → admin/src/App.tsx
- `uploadToS3()` --calls--> `adminFetch()`  [EXTRACTED]
  admin/src/pages/ShopBannersPage.tsx → admin/src/App.tsx
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (107 total, 14 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (56): dependencies, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, express, express-rate-limit (+48 more)

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (46): devDependencies, autoprefixer, concurrently, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+38 more)

### Community 2 - "Community 2"
Cohesion: 0.05
Nodes (38): useIsMobile(), Input, Separator, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader() (+30 more)

### Community 3 - "Community 3"
Cohesion: 0.05
Nodes (38): Admin, adminSchema, app, Banner, bannerSchema, Blog, blogSchema, Coupon (+30 more)

### Community 4 - "Community 4"
Cohesion: 0.10
Nodes (22): Navbar(), AuthContext, AuthContextType, AuthUser, useAuth(), AuthPage(), OrderSummary, STATUS_COLOR (+14 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (10): Footer(), shopLinks, supportLinks, backdrop, isShop, navLinks, sidePanel, Recipe (+2 more)

### Community 6 - "Community 6"
Cohesion: 0.11
Nodes (24): Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners, memoryState (+16 more)

### Community 7 - "Community 7"
Cohesion: 0.08
Nodes (25): dependencies, lucide-react, react, react-dom, react-quill, react-router-dom, recharts, devDependencies (+17 more)

### Community 8 - "Community 8"
Cohesion: 0.10
Nodes (15): OptimizedImage(), OptimizedImageProps, partnerLogos, services, giftCategories, highlights, CountUpStats(), leaders (+7 more)

### Community 9 - "Community 9"
Cohesion: 0.09
Nodes (22): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+14 more)

### Community 10 - "Community 10"
Cohesion: 0.09
Nodes (12): Checkbox, HoverCardContent, PopoverContent, Progress, RadioGroup, RadioGroupItem, ScrollArea, ScrollBar (+4 more)

### Community 11 - "Community 11"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleResolution (+12 more)

### Community 12 - "Community 12"
Cohesion: 0.18
Nodes (16): cn(), Button, ButtonProps, buttonVariants, Calendar(), CalendarProps, Pagination(), PaginationContent (+8 more)

### Community 13 - "Community 13"
Cohesion: 0.16
Nodes (8): BlogPostItem, HARDCODED_POSTS, apiFetch(), apiUrl(), BlogPost, RelatedPost, qualities, Job

### Community 14 - "Community 14"
Cohesion: 0.14
Nodes (12): ScrollToTop(), Address, AddressForm, CartItem, CheckoutPage(), emptyAddr, states, Window (+4 more)

### Community 15 - "Community 15"
Cohesion: 0.12
Nodes (15): Command, CommandDialogProps, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator (+7 more)

### Community 16 - "Community 16"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 17 - "Community 17"
Cohesion: 0.20
Nodes (16): cognito, ddb, ddbClient, generateOrderId(), getToken(), handler(), json(), matchRoute() (+8 more)

### Community 18 - "Community 18"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 19 - "Community 19"
Cohesion: 0.14
Nodes (11): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+3 more)

### Community 20 - "Community 20"
Cohesion: 0.14
Nodes (12): Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext, CarouselOptions (+4 more)

### Community 21 - "Community 21"
Cohesion: 0.15
Nodes (12): compilerOptions, allowJs, baseUrl, noImplicitAny, noUnusedLocals, noUnusedParameters, paths, skipLibCheck (+4 more)

### Community 22 - "Community 22"
Cohesion: 0.23
Nodes (8): LoginPage(), AdminLayout(), AdminUser, AuthContext, AuthCtx, NAV_ITEMS, Sidebar(), useAdminAuth()

### Community 23 - "Community 23"
Cohesion: 0.17
Nodes (11): dependencies, @aws-sdk/client-cognito-identity-provider, @aws-sdk/client-dynamodb, @aws-sdk/client-s3, @aws-sdk/lib-dynamodb, @aws-sdk/s3-request-presigner, razorpay, uuid (+3 more)

### Community 24 - "Community 24"
Cohesion: 0.17
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 25 - "Community 25"
Cohesion: 0.18
Nodes (7): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, THEMES

### Community 26 - "Community 26"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 27 - "Community 27"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 28 - "Community 28"
Cohesion: 0.22
Nodes (3): ambianceImages, foodImages, Tab

### Community 29 - "Community 29"
Cohesion: 0.22
Nodes (6): b2bServices, childFade, Deal, fadeUp, galleryImages, stagger

### Community 30 - "Community 30"
Cohesion: 0.22
Nodes (8): CartItem, defaultCategoryList, defaultStorageList, fallbackProducts, Product, sortOptions, WishlistEntry, ProductsPage()

### Community 31 - "Community 31"
Cohesion: 0.25
Nodes (8): Banner, bannerSchema, Deal, dealSchema, pickProducts(), Product, productSchema, seedPromotions()

### Community 32 - "Community 32"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 33 - "Community 33"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 34 - "Community 34"
Cohesion: 0.25
Nodes (5): ambianceImages, childFade, fadeUp, stagger, testimonials

### Community 35 - "Community 35"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 36 - "Community 36"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 37 - "Community 37"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 38 - "Community 38"
Cohesion: 0.25
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 39 - "Community 39"
Cohesion: 0.48
Nodes (6): AuthProvider(), getAuthCookie(), getCookieDomain(), migrateTokenToCookie(), removeAuthCookie(), setAuthCookie()

### Community 40 - "Community 40"
Cohesion: 0.29
Nodes (4): Banner, emptyForm, FormData, uploadToS3()

### Community 41 - "Community 41"
Cohesion: 0.33
Nodes (3): uploadToS3(), ReservationItem, adminFetch()

### Community 42 - "Community 42"
Cohesion: 0.29
Nodes (4): emptyForm, FormData, ShopBanner, uploadToS3()

### Community 43 - "Community 43"
Cohesion: 0.29
Nodes (6): Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle

### Community 44 - "Community 44"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 45 - "Community 45"
Cohesion: 0.33
Nodes (4): Job, Application, emptyJob, JobForm

### Community 46 - "Community 46"
Cohesion: 0.33
Nodes (4): PendingOrder, RecentInquiry, RecentReview, Stats

### Community 47 - "Community 47"
Cohesion: 0.33
Nodes (4): emptySiteForm, ReviewItem, SiteReview, SiteReviewForm

### Community 48 - "Community 48"
Cohesion: 0.40
Nodes (3): emptyForm, FormState, ProductItem

### Community 49 - "Community 49"
Cohesion: 0.40
Nodes (3): EMPTY, Recipe, STATUS_COLORS

### Community 50 - "Community 50"
Cohesion: 0.40
Nodes (3): client, ddb, products

### Community 51 - "Community 51"
Cohesion: 0.40
Nodes (3): Blog, EMPTY_BLOG, STATUS_COLORS

### Community 52 - "Community 52"
Cohesion: 0.40
Nodes (3): Inquiry, statusColors, statusIcons

### Community 53 - "Community 53"
Cohesion: 0.40
Nodes (3): UserAddress, UserItem, UserProfile

### Community 54 - "Community 54"
Cohesion: 0.40
Nodes (3): Product, products, productSchema

### Community 55 - "Community 55"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 56 - "Community 56"
Cohesion: 0.40
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 58 - "Community 58"
Cohesion: 0.50
Nodes (3): dependencies, @aws-sdk/client-dynamodb, @aws-sdk/lib-dynamodb

### Community 62 - "Community 62"
Cohesion: 0.50
Nodes (3): app, Reservation, reservationSchema

### Community 63 - "Community 63"
Cohesion: 0.50
Nodes (3): AccordionContent, AccordionItem, AccordionTrigger

### Community 64 - "Community 64"
Cohesion: 0.50
Nodes (3): Avatar, AvatarFallback, AvatarImage

### Community 65 - "Community 65"
Cohesion: 0.67
Nodes (3): Badge(), BadgeProps, badgeVariants

### Community 66 - "Community 66"
Cohesion: 0.50
Nodes (3): TabsContent, TabsList, TabsTrigger

## Knowledge Gaps
- **569 isolated node(s):** `deploy.sh script`, `name`, `private`, `version`, `type` (+564 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 12` to `Community 2`, `Community 6`, `Community 10`, `Community 15`, `Community 19`, `Community 20`, `Community 24`, `Community 25`, `Community 26`, `Community 27`, `Community 32`, `Community 33`, `Community 35`, `Community 36`, `Community 37`, `Community 38`, `Community 43`, `Community 44`, `Community 55`, `Community 56`, `Community 63`, `Community 64`, `Community 65`, `Community 66`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 0` to `Community 1`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Why does `Footer()` connect `Community 5` to `Community 34`, `Community 4`, `Community 8`, `Community 13`, `Community 29`, `Community 30`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **What connects `deploy.sh script`, `name`, `private` to the rest of the system?**
  _569 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.03571428571428571 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.0425531914893617 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.04927536231884058 - nodes in this community are weakly interconnected._