<script setup>
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
</script>
<template>
  <main class="grid grid-cols-3 justify-between">
    <section class="flex flex-col w-52 gap-10">
      <h2 class="text-3xl font-bold mb-8">Buttons</h2>
      <Button>Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="destructive">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="link">Click me</Button>
    </section>
    <section class="flex flex-col w-72 gap-20">
      <h2 class="text-3xl font-bold">Carousel</h2>

      <Carousel class="relative w-full max-w-sm" :opts="{ align: 'start' }">
        <CarouselContent>
          <CarouselItem v-for="(_, index) in 5" :key="index" class="md:basis-1/2 lg:basis-1/3">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center p-6">
                  <span class="text-3xl font-semibold">{{ index + 1 }}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel orientation="vertical" class="relative w-full max-w-xs" :opts="{ align: 'start' }">
        <CarouselContent class="-mt-1 h-[200px]">
          <CarouselItem v-for="(_, index) in 5" :key="index" class="p-1 md:basis-1/2">
            <div class="p-1">
              <Card>
                <CardContent class="flex items-center justify-center p-6">
                  <span class="text-3xl font-semibold">{{ index + 1 }}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel class="relative w-full max-w-xs">
        <CarouselContent>
          <CarouselItem v-for="(_, index) in 5" :key="index">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center p-6">
                  <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
    <section class="flex flex-col w-72 gap-10">
      <h2 class="text-3xl font-bold mb-8">Dialogs</h2>
      <AlertDialog>
        <AlertDialogTrigger class="bg-red-500 text-white text-sm p-2 rounded-md"
          >Open Alert Dialog</AlertDialogTrigger
        >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline"> Edit Profile </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right"> Name </Label>
              <Input id="name" value="Pedro Duarte" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right"> Username </Label>
              <Input id="username" value="@peduarte" class="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit"> Save changes </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  </main>
</template>
