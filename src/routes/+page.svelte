<script lang="ts">
    import {ArrowUp} from "@lucide/svelte";
    import * as InputGroup from "$lib/components/ui/input-group/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    import {Button} from "$lib/components/ui/button/index.js";
    import {Timestore} from "../stores/timestore.svelte.ts";

    const timeStore = new Timestore();

    let ticketPrefix = $state<string | undefined>(undefined);
    let ticketNumber = $state<number | undefined>(undefined);
    let ticket = $derived(`${ticketPrefix}-${ticketNumber}`)
</script>

<InputGroup.Root>
    <InputGroup.Addon align="inline-start">
        <Select.Root type="single" bind:value={ticketPrefix}>
            <Select.Trigger>
                <Select.Value placeholder="PRFX" />
            </Select.Trigger>
            <Select.Content>
                <Select.Item value="ECOM">ECOM</Select.Item>
                <Select.Item value="TEC">TEC</Select.Item>
                <Select.Item value="ICT">ICT</Select.Item>
                <Select.Item value="SNOW">SNOW</Select.Item>
            </Select.Content>
        </Select.Root>
    </InputGroup.Addon>
    <InputGroup.Input placeholder="3210" bind:value={ticketNumber} />
    <InputGroup.Addon align="inline-end">
        <Button size="icon-lg" onclick={() => timeStore.startTracking(ticket)}><ArrowUp /></Button>
    </InputGroup.Addon>
</InputGroup.Root>

<Accordion.Root type="multiple">
    {#each timeStore.history as event}
        <Accordion.Item>
            <Accordion.Trigger>{event.ticket}</Accordion.Trigger>
            <Accordion.Content>Started at {event.timestamp}</Accordion.Content>
        </Accordion.Item>
    {/each}
</Accordion.Root>